"use client";

import { useFormStatus } from "react-dom";
import { CldUploadWidget } from "next-cloudinary";
import { useState } from "react";
import { createProduct } from "../../lib/actions";

export default function CreateForm({ myPreset }) {
  const { pending } = useFormStatus();
  const [secureUrl1, setSecureUrl1] = useState("");
  const [secureUrl2, setSecureUrl2] = useState("");
  const [secureUrl3, setSecureUrl3] = useState("");
  const [secureUrl4, setSecureUrl4] = useState("");
  const [originalFilename1, setOriginalFilename1] = useState("");
  const [originalFilename2, setOriginalFilename2] = useState("");
  const [originalFilename3, setOriginalFilename3] = useState("");
  const [originalFilename4, setOriginalFilename4] = useState("");
  const [res, setRes] = useState("");
  console.log(res);

  return (
    <div className="relative">
      <form action={createProduct}>
        <div>
          <div className="mb-4">
            <label htmlFor="name" className="mb-2 block text-sm font-medium">
              Product name
            </label>
            <div className="relative mt-2 rounded-md">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter product name"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-5 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="mb-2 block text-sm font-medium">
              Product price
            </label>
            <div className="relative mt-2 rounded-md">
              <input
                id="price"
                name="price"
                type="number"
                step="0.01"
                placeholder="Enter USD product price"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-5 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>

          <div>
            {secureUrl1 && (
              <div className="mb-4 flex">
                <div className="mr-4">
                  <p className="mb-2 block text-sm font-medium">
                    Product image 1
                  </p>
                  <div className="mb-2 flex items-center justify-center overflow-hidden w-[130px] h-[130px] border border-gray-200 ">
                    <img
                      src={secureUrl1}
                      alt="Product image"
                      className="block object-cover h-full object-center"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="image1"
                    className="mb-2 block text-sm font-medium"
                  >
                    The image URL for the selected file - &quot;
                    {originalFilename1}
                    &quot;
                  </label>

                  <input
                    id="image1"
                    name="image1"
                    type="text"
                    defaultValue={secureUrl1}
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-5 text-sm outline-2 placeholder:text-gray-500"
                  />
                </div>
              </div>
            )}
          </div>

          <div>
            {secureUrl2 && (
              <div className="mb-4 flex">
                <div className="mr-4">
                  <p className="mb-2 block text-sm font-medium">
                    Product image 2
                  </p>
                  <div className="mb-2 flex items-center justify-center overflow-hidden w-[130px] h-[130px] border border-gray-200 ">
                    <img
                      src={secureUrl2}
                      alt="Product image"
                      className="block object-cover h-full object-center"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="image2"
                    className="mb-2 block text-sm font-medium"
                  >
                    The image URL for the selected file - &quot;
                    {originalFilename2}
                    &quot;
                  </label>

                  <input
                    id="image2"
                    name="image2"
                    type="text"
                    defaultValue={secureUrl2}
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-5 text-sm outline-2 placeholder:text-gray-500"
                  />
                </div>
              </div>
            )}
          </div>

          <div>
            {secureUrl3 && (
              <div className="mb-4 flex">
                <div className="mr-4">
                  <p className="mb-2 block text-sm font-medium">
                    Product image 3
                  </p>
                  <div className="mb-2 flex items-center justify-center overflow-hidden w-[130px] h-[130px] border border-gray-200 ">
                    <img
                      src={secureUrl3}
                      alt="Product image"
                      className="block object-cover h-full object-center"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="image3"
                    className="mb-2 block text-sm font-medium"
                  >
                    The image URL for the selected file - &quot;
                    {originalFilename3}
                    &quot;
                  </label>

                  <input
                    id="image3"
                    name="image3"
                    type="text"
                    defaultValue={secureUrl3}
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-5 text-sm outline-2 placeholder:text-gray-500"
                  />
                </div>
              </div>
            )}
          </div>

          <div>
            {secureUrl4 && (
              <div className="mb-4 flex">
                <div className="mr-4">
                  <p className="mb-2 block text-sm font-medium">
                    Product image 4
                  </p>
                  <div className="mb-2 flex items-center justify-center overflow-hidden w-[130px] h-[130px] border border-gray-200 ">
                    <img
                      src={secureUrl4}
                      alt="Product image"
                      className="block object-cover h-full object-center"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="image4"
                    className="mb-2 block text-sm font-medium"
                  >
                    The image URL for the selected file - &quot;
                    {originalFilename4}
                    &quot;
                  </label>

                  <input
                    id="image4"
                    name="image4"
                    type="text"
                    defaultValue={secureUrl4}
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-5 text-sm outline-2 placeholder:text-gray-500"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <button
          type="submit"
          aria-disabled={pending}
          className="mb-4 inline-block py-2 px-4 rounded-full font-semibold uppercase text-white bg-green-600 hover:bg-green-500"
        >
          Create product
        </button>
      </form>

      <CldUploadWidget
        uploadPreset={myPreset}
        options={{ folder: "my-test" }}
        onSuccess={(results) => {
          setSecureUrl1(results.info.secure_url);
          setOriginalFilename1(results.info.original_filename);
          setRes(results.info.asset_id);
        }}
      >
        {({ open }) => {
          return (
            <button
              onClick={() => open()}
              className="mr-2 mb-4 inline-block py-2 px-4 rounded-full font-semibold uppercase text-white bg-slate-600 hover:bg-slate-500"
            >
              Upload Image 1
            </button>
          );
        }}
      </CldUploadWidget>

      <CldUploadWidget
        uploadPreset={myPreset}
        options={{ folder: "my-test" }}
        onSuccess={(results) => {
          setSecureUrl2(results.info.secure_url);
          setOriginalFilename2(results.info.original_filename);
          setRes(results.info.asset_id);
        }}
      >
        {({ open }) => {
          return (
            <button
              onClick={() => open()}
              className="mr-2 mb-4 inline-block py-2 px-4 rounded-full font-semibold uppercase text-white bg-slate-600 hover:bg-slate-500"
            >
              Upload Image 2
            </button>
          );
        }}
      </CldUploadWidget>

      <CldUploadWidget
        uploadPreset={myPreset}
        options={{ folder: "my-test" }}
        onSuccess={(results) => {
          setSecureUrl3(results.info.secure_url);
          setOriginalFilename3(results.info.original_filename);
          setRes(results.info.asset_id);
        }}
      >
        {({ open }) => {
          return (
            <button
              onClick={() => open()}
              className="mr-2 mb-4 inline-block py-2 px-4 rounded-full font-semibold uppercase text-white bg-slate-600 hover:bg-slate-500"
            >
              Upload Image 3
            </button>
          );
        }}
      </CldUploadWidget>

      <CldUploadWidget
        uploadPreset={myPreset}
        options={{ folder: "nowo" }}
        onSuccess={(results) => {
          setSecureUrl4(results.info.secure_url);
          setOriginalFilename4(results.info.original_filename);
          setRes(results.info.asset_id);
        }}
      >
        {({ open }) => {
          return (
            <button
              onClick={() => open()}
              className="mr-2 mb-4 inline-block py-2 px-4 rounded-full font-semibold uppercase text-white bg-slate-600 hover:bg-slate-500"
            >
              Upload Image 4
            </button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
}
