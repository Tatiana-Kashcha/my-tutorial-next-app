'use client'

import Image from 'next/image';
import { useState } from 'react';
import { ButtonSubmit } from '@/app/ui/components/buttons';

const styleButton = 'primary-btn w-60 p-2 mt-4';

function PhotoInput({ name, handleFileChange }) {
  return (
    <form className="mt-1 flex w-[400px] flex-col bg-white p-3">
      <span className="flex justify-center py-2">{name}</span>
      <div className="mt-2 flex">
        <Image
          className="h-10 w-10  object-cover"
          src="/images/noImagesImg.png"
          width={40}
          height={40}
          alt="Current profile photo"
        />
      </div>
      <label className="block text-center">
        <input
          type="file"
          name={name}
          onChange={handleFileChange}
          className="block w-full text-sm text-slate-500 file:mr-4 file:rounded-full file:border-0 file:bg-violet-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-violet-700 hover:file:bg-violet-100"
        />
      </label>
    </form>
  );
}

export function AdminAddImages() {
    const [selectedFile, setSelectedFile] = useState(null);
    console.log(selectedFile);
  const handleFileChange = event => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const photoInputs = ['Photo1', 'Photo2', 'Photo3', 'Photo4', 'Photo5'];

  return (
    <div className="flex flex-col items-center rounded-lg border p-4 max-md:ml-0 max-md:w-full">
      {photoInputs.map(name => (
        <PhotoInput
          key={name}
          name={name}
          handleFileChange={handleFileChange}
        />
      ))}
      <ButtonSubmit
        type="submit"
        buttonText="Update photos"
        buttonStyle={styleButton}
      />
    </div>
  );
}