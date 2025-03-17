"use server";

import { cookies } from "next/headers";
import { CartItem } from "@/types";

export async function addItemToCart(data: CartItem) {
  return { success: true, message: "Item added succcessfully to cart" };
}
