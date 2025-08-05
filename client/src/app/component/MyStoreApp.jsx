"use client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import ProductInput from "./ProductInput";
import ProductDetails from "./ProductDetails";
import UpdatePriceForm from "./UpdatePriceForm";
import { base_url } from "../api/api";
import axiosClient from "../api/axiosClient";

const MyStoreApp = () => {
  const [productId, setProductId] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const queryClient = useQueryClient();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const fetchProduct = async (id) => {
    const { data } = await axiosClient.get(`${base_url}/${id}`);
    return data;
  };

  const updatePrice = async ({ id, price }) => {
    const { data } = await axiosClient.put(`${base_url}/${id}`, {
      current_price: price,
    });
    return data;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => fetchProduct(productId),
    enabled: !!productId && productId !== "" && parseInt(productId) > 0 && isMounted,
  });

  const mutation = useMutation({
    mutationFn: updatePrice,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["product", productId] });
    },
  });

  if (!isMounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center px-4">
      <div className="w-full max-w-lg p-6 border border-gray-200 rounded-xl shadow-md space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-900 tracking-tight">
          📦 myStore Product Viewer
        </h1>
        <ProductInput productId={productId} setProductId={setProductId} />
        <ProductDetails productId={productId} isLoading={isLoading} error={error} data={data} />
        <UpdatePriceForm data={data} productId={productId} setProductId={setProductId} mutation={mutation} />
      </div>
    </div>
  );
};

export default MyStoreApp;