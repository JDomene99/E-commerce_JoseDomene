import React, { useState } from "react";
import { Form, Formik } from "formik";
import { Await, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { insertProduct } from "../../api/products";

function ProductForm() {
  
  const [file, setFile] = useState()

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          description: "",
          price: "",
          stock: "",
          category: "",
          // img: "",
        }}
        onSubmit={async (values) => {
          try {
            const formData = new FormData()
            formData.append("image", file.data)
            console.log(values);
            console.log(formData);
            const response = await insertProduct(formData)
            console.log(response);
            
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ values, handleChange, handleSubmit,setFieldValue }) => (
          <Form
            onSubmit={handleSubmit}
            className="flex flex-col xl:w-4/12 xl:mx-auto gap-y-8 pt-20"
          >
            <TextField
              label="Name"
              name="name"
              onChange={handleChange}
              value={values.name}
            />

            <TextField
              label="Description"
              name="description"
              onChange={handleChange}
              value={values.description}
            />

            <TextField
              label="Stock"
              name="stock"
              onChange={handleChange}
              value={values.stock}
            />

            <TextField
              label="Price"
              name="price"
              onChange={handleChange}
              value={values.price}
            />
            <input type="file" 
              onChange={e => setFile(e.target.files[0])} 
              accept="image/*"/>

            <Button variant="outlined" type="submit" size="large">
              Create
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ProductForm;
