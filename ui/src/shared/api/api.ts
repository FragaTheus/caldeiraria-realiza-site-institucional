"use client";

import axios from "axios";

export interface EmailRequest{
    name: string,
    company: string,
    phone: string,
    email: string,
    message: string,
    attachmentBase64?: string,
    attachmentName?: string,
}

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

