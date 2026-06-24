"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { apiFetch } from "@/lib/api";
import { saveToken } from "@/lib/auth";

import type { LoginResponse } from "@/types/auth";

export default function LoginPage() {
    const router = useRouter();

    const [username, setUsername] =
        useState("");

    const [password, setPassword] =
        useState("");

    const [error, setError] =
        useState("");

    const [loading, setLoading] =
        useState(false);

    async function handleSubmit(

        e: React.SubmitEvent
    ) {

        e.preventDefault();

        try {
            setLoading(true);
            setError("");

            const data =
                await apiFetch<LoginResponse>(
                    "/api/auth/login",
                    {
                        method: "POST",
                        body: JSON.stringify({
                            username,
                            password,
                        }),
                    }
                );

            saveToken(data.token);

            router.push("/todos");
        } catch (err) {
            setError(
                err instanceof Error
                    ? err.message
                    : "Login failed"
            );
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="min-h-screen flex items-center justify-center bg-slate-100">
            <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
                <h1 className="text-3xl font-bold text-center">
                    Welcome Back
                </h1>

                <p className="text-center text-gray-500 mt-2">
                    Login to your account
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-4"
                >
                    <div>
                        <label className="block mb-2 text-sm font-medium">
                            Username
                        </label>

                        <input
                            type="text"
                            required
                            value={username}
                            onChange={(e) =>
                                setUsername(
                                    e.target.value
                                )
                            }
                            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium">
                            Password
                        </label>

                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) =>
                                setPassword(
                                    e.target.value
                                )
                            }
                            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {error && (
                        <p className="text-red-500 text-sm">
                            {error}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition"
                    >
                        {loading
                            ? "Signing In..."
                            : "Login"}
                    </button>
                </form>

                <p className="text-center mt-6 text-sm">
                    Don't have an account?{" "}
                    <Link
                        href="/register"
                        className="text-blue-600 font-medium"
                    >
                        Register
                    </Link>
                </p>
            </div>
        </main>
    );
}