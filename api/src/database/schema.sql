-- Criar o banco de dados
CREATE DATABASE mycontacts;

-- Criar exetensão do uuid
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Criar tabela de categorias de contatos
CREATE TABLE IF NOT EXISTS categories (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL
);

-- Criar tabela de contatos
CREATE TABLE IF NOT EXISTS contacts (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  email VARCHAR,
  phone VARCHAR,
  category_id UUID,
  FOREIGN KEY (category_id) REFERENCES categories (id)
);
