import React from 'react';
import { AdminDashboard } from '@/app/ui/components/admin/AdminDashboard';
import { AdminAddImages } from '@/app/ui/components/admin/AdminAddImages';

const fields = [
  { label: 'Product Name', placeholder: 'productName' },
  { label: 'Brand', placeholder: 'brandName' },
  { label: 'Stock Quantity, units', placeholder: 'stockQuantity' },
  { label: 'Regular Price, zl', placeholder: 'regularPrice' },
  { label: 'Sale Price, zl', placeholder: 'salePrice' },
  { label: 'Tag', placeholder: '#tag' },
];

export function AdminAddProduct() {
  return (
    <div className="flex flex-col lap:flex-row ">
      <AdminDashboard />
      <div className="flex flex-col items-center rounded-lg border p-4  ">
        <div className="mt-1 flex w-[400px] flex-col bg-white p-4">
          <h2 className="text-center text-body1 font-semibold">AddProduct</h2>
          {/* додавання нових продуктів */}
          <ul>
            {fields.map((field, index) => (
              <li key={index}>
                <p className="mt-2 text-center text-body2">{field.label}</p>
                <input
                  id={`input-${index}`}
                  type="text"
                  className="mt-4 w-full justify-center rounded-lg border border-solid border-neutral-800 bg-slate-100 px-4 py-2.5 text-body1 tracking-wide"
                  placeholder={field.placeholder}
                />
              </li>
            ))}
          </ul>

          {/* Description */}

          <div className="col-span-full mt-2 text-center text-body2">
            <label htmlFor="description">Description</label>
            <div className="mt-2">
              <textarea
                id="description"
                name="description"
                rows="2"
                className="block max-h-[220px] w-full rounded-lg border-0 bg-slate-100 p-2  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100"
              ></textarea>
            </div>
          </div>

          {/* category */}
          <div>
            <label
              htmlFor="categoryInputs"
              className="mt-2 block text-center text-sm font-medium leading-6 text-gray-900"
            >
              Category
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
              <input
                type="text"
                name="category"
                id="categoryInputs"
                className="block w-full rounded-md border border-solid border-neutral-800 bg-slate-100 py-2.5 pl-3 pr-3 text-body1  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset "
                placeholder="category"
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <select
                  id="categorySelect"
                  name="category"
                  className="h-full rounded-md border-0 bg-transparent py-2.5 pr-3 text-body1 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-200 "
                >
                  <option>category 1</option>
                  <option>category 2</option>
                  <option>category 3</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* додавання фото */}
      {/* <AdminAddImages /> */}
    </div>
  );
}
