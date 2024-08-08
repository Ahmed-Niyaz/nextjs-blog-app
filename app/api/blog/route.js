import { ConnectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";
import {writeFile} from 'fs/promises'
import BlogModel from "@/lib/models/BlogModel";
import { log } from "console";
const fs = require('fs');

const LoadDB = async () => {
    await ConnectDB();
}

LoadDB();

export async function GET(request) {
    const blogId = request.nextUrl.searchParams.get('id');

    if (blogId) {
        const blog = await BlogModel.findById(blogId);
        return NextResponse.json(blog);
    }

    const blogs = await BlogModel.find({});
    console.log(blogs);
    return NextResponse.json({blogs});
}

export async function POST(request) {
    const formData = await request.formData();
    const timestamp = Date.now();

    const image = formData.get('image');
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timestamp}-${image.name}`;
    await writeFile(path, buffer); // create image in that path

    const imgUrl = `/${timestamp}-${image.name}`

    const blogData = {
        title: formData.get('title'),
        description: formData.get('description'),
        author: formData.get('author'),
        category: formData.get('category'),
        image: imgUrl,
        author_img: formData.get('authorImg')

    }

    await BlogModel.create(blogData);
    console.log("blog saved");
    

    return NextResponse.json({success: true, message: 'blog added'})

}


export async function DELETE(request) {
    const id = await request.nextUrl.searchParams.get('id');

    const blog = await BlogModel.findById(id);

    

    fs.unlink(`./public${blog.image}`, () => {});

    const response = await BlogModel.findByIdAndDelete(id);
    console.log(response);



    return NextResponse.json({success: true, msg: 'Blog Deleted'})
}