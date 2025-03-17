"use server";

import { cookies } from "next/headers";
import { CartItem } from "@/types";
import { formatError } from "../utils";
import { auth } from "@/auth";
import { prisma } from "@/db/prisma";

export async function addItemToCart(data: CartItem) {
  try {
    const sessionCartId = (await cookies()).get("sessionCartId")?.value;
    if (!sessionCartId) {
      throw new Error("Cart session not found");
    }

    //Get session and userId
    const session = await auth();
    const userId = session?.user?.id ? (session.user.id as string) : undefined;

    //Get Cart from DB
    const cart = prisma.cart.findFirst({
      where: userId ? { userId: userId } : { sessionCartId: sessionCartId },
    });

    return {
      success: true,
      message: "Item added succcessfully to cart",
    };
  } catch (error) {
    return {
      success: false,
      message: formatError(error),
    };
  }
}
