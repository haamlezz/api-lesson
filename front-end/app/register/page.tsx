"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { apiFetch } from "@/lib/api";

export default function RegisterPage() {
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

            await apiFetch(
                "/api/auth/register",
                {
                    method: "POST",
                    body: JSON.stringify({
                        username,
                        password,
                    }),
                }
            );

            router.push("/login");
        } catch (err) {
            setError(
                err instanceof Error
                    ? err.message
                    : "Registration failed"
            );
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="min-h-screen flex items-center justify-center bg-slate-100">
            <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
                <h1 className="text-3xl font-bold text-center">
                    Create Account
                </h1>

                <p className="text-center text-gray-500 mt-2">
                    Register a new account
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
                            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
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
                            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
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
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition"
                    >
                        {loading
                            ? "Creating..."
                            : "Register"}
                    </button>
                </form>

                <p className="text-center mt-6 text-sm">
                    Already have an account?{" "}
                    <Link
                        href="/login"
                        className="text-blue-600 font-medium"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </main>
    );
}