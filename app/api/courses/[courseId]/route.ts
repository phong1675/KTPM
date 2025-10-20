import db from "@/db/dizzle";
import { courses } from "@/db/schema";
import { eq } from "dizzle-orm";
import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/admin";


export const GET = async (
    req: Request,
    { params }: { params: { courseId: number } },
) => {
    if (!isAdmin()) {
        return new NextResponse("Unauthorized", { status: 403});
    }

    const data = await db.query.courses.findFirst({
        where: eq(courses.id, params.courseId),
    });

    return NextResponse.json(data);
};

export const PUT = async (
    req: Request,
    { params }: { params: { courseId: number } }, 
) => {
    if(!isAdmin()){
        return new NextResponse("Unauthorized", { status: 403});
    }
    const body = await req.json();
    const data = await db.update(courses).set({
        ...body,
    }).where(eq(courses.id, params,courseId));

    return NextResponse.json(data);
}