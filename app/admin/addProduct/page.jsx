"use client";
import { assets, blog_data } from "@/Assests/assets";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";

const addProductPage = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Technology",
    author_img: "/author_img.png",
    author: "Alex Bennett",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(data);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("authorImg", data.author_img);
    formData.append("image", image);

    const response = await axios.post("/api/blog", formData);
    if (response.data.success) {
      toast.success(response.data.message);
      setData({
        title: "",
        description: "",
        category: "Technology",
        author_img: "/author_img.png",
        author: "Alex Bennett",
      });
      setImage(false);
    } else {
      toast.error(response.data.message);
    }
  };



  

  return (
    <>
      <form onSubmit={onSubmitHandler} className="pt-5 sm:pt-12 sm:pl-16">
        <p className="text-xl">Upload thumbnail</p>
        <label htmlFor="image">
          <Image
            className="mt-4"
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            alt="img"
            width={140}
            height={70}
          />
        </label>
        <input
          type="file"
          id="image"
          onChange={(e) => {setImage(e.target.files[0]); console.log(e.target.files[0])}}
          hidden
          required
        />
        <p className="text-xl mt-4">Blog title</p>
        <input
          onChange={onChangeHandler}
          name="title"
          value={data.title}
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border border-black outline-none"
          type="text"
          placeholder="Type here"
        />
        <p className="text-xl mt-4">Blog Description</p>
        <textarea
          onChange={onChangeHandler}
          value={data.description}
          name="description"
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border border-black outline-none"
          type="text"
          placeholder="Type here"
          rows={6}
        />
        <p className="text-xl mt-4">Blog category</p>
        <select
          onChange={onChangeHandler}
          name="category"
          value={data.category}
          className="w-40 mt-4 px-4 py-3 border text-gray-500"
        >
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>
        <br />
        <button type="submit" className="mt-8 w-40 h-12 bg-black text-white">
          Add
        </button>
      </form>

      {/* {'Button to add all'} */}

      {/* {blog_data.map(blog => {
        const {id, title, description, image, author, author_img, category} = blog;

        async function convetImag(src) {
            fetch(src)
            .then(res => res.blob())
            .then(blob => {
                const urlParts = src.split('/')
                const last = urlParts.slice(-1);
                // console.log(urlParts);
                // console.log(last);
                const nameParts = last[0].split('.');
                // console.log(nameParts);
                const filename = nameParts[0] + '.' + nameParts.slice(-1);
                // console.log(filename);
            
                
                
                
                const file = new File([blob], filename, {type: blob.type});
                console.log('this is my file',file);
            });
        }

        if (id === 1) {
            console.log(blog);
            convetImag(image.src)
        }
        
      })} */}
      
    </>
  );
};

export default addProductPage;
