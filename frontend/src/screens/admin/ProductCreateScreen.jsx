import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useCreateProductMutation, useUploadProductImageMutation } from '../../slices/productsApiSlice';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import FormContainer from '../../components/FormContainer';
import { toast } from 'react-toastify';

const ProductCreateScreen = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [countInStock, setCountInStock] = useState(0);

  const navigate = useNavigate();

  const [createProduct, { isLoading: loadingCreate, error: createError }] = useCreateProductMutation();
  const [uploadProductImage, { isLoading: loadingUpload, error: uploadError }] = useUploadProductImageMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await createProduct({
        name,
        price,
        image,
        brand,
        category,
        description,
        countInStock,
      }).unwrap();
      navigate('/admin/productlist');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  const uploadFileHandler = async (e) => {
    const formData = new FormData();
    formData.append('image', e.target.files[0]);
    try {
      const res = await uploadProductImage(formData).unwrap();
      toast.success(res.message);
      setImage(res.image);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <>
      <Button onClick={() => navigate('/admin/productlist')} className='btn btn-light my-3'>
        Voltar
      </Button>
      <FormContainer>
        <h1>Criar Produto</h1>
        {createError && <Message variant='danger'>{createError.data?.message || createError.error}</Message>}
        {uploadError && <Message variant='danger'>{uploadError.data?.message || uploadError.error}</Message>}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='name'>
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type='text'
              placeholder='Digite o nome do produto'
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='price'>
            <Form.Label>Preço</Form.Label>
            <Form.Control
              type='number'
              placeholder='Digite o preço'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='image'>
            <Form.Label>Imagem</Form.Label>
            <Form.Control
              type='text'
              placeholder='Digite a URL da imagem'
              value={image}
              onChange={(e) => setImage(e.target.value)}
            ></Form.Control>
            <Form.Control
              label='Escolher arquivo'
              onChange={uploadFileHandler}
              type='file'
            ></Form.Control>
            {loadingUpload && <Loader />}
          </Form.Group>

          <Form.Group controlId='brand'>
            <Form.Label>Marca</Form.Label>
            <Form.Control
              type='text'
              placeholder='Digite a marca'
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='category'>
            <Form.Label>Categoria</Form.Label>
            <Form.Control
              type='text'
              placeholder='Digite a categoria'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='description'>
            <Form.Label>Descrição</Form.Label>
            <Form.Control
              type='text'
              placeholder='Digite a descrição'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='countInStock'>
            <Form.Label>Quantidade em Estoque</Form.Label>
            <Form.Control
              type='number'
              placeholder='Digite a quantidade em estoque'
              value={countInStock}
              onChange={(e) => setCountInStock(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type='submit' variant='primary' className='mt-3'>
            Criar
          </Button>

          {loadingCreate && <Loader />}
        </Form>
      </FormContainer>
    </>
  );
};

export default ProductCreateScreen;