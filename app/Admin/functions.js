"use server";

import { cookies } from "next/headers";

export async function clear_refresh_cookie() {
  const cookieStore = await cookies(); 
  cookieStore.delete('refresh');
}
