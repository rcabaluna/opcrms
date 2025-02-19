import LoginForm from "@/components/login-form";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";

const Login = ({ className, ...props }: React.ComponentPropsWithoutRef<"div">) => {
    return (
        <>
            <div className={cn("flex min-h-screen items-center justify-center bg-sky-700", className)} {...props}>
                <div className="w-full max-w-md">
                    <Card>
                        <CardHeader className="flex flex-row items-center gap-4">
                            <img src="/logo.png" alt="DOST 10 Logo" className="w-12 h-12 ml-1" />
                            <div className="flex flex-col pl-3">
                                <CardTitle className="text-xl">DOST 10 - OPCRMS</CardTitle>
                                <CardDescription>
                                    Office and Individual Performance Commitment and Review <br /> Management System
                                </CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <LoginForm />
                        </CardContent>
                    </Card>
                    <div className="mt-4 text-center text-xs text-white [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary">
                        Developed by{" "}
                        <a href="https://region10.dost.gov.ph" target="_blank">
                            DOST 10
                        </a>{" "}
                        - MIS Unit.
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
