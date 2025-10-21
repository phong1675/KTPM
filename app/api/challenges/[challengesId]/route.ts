import db from "@/db/dizzle";
import { challenges } from "@/db/schema";
import { eq } from "dizzle-orm";
import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/admin";


export const GET = async (
    req: Request,
    { params }: { params:{ challengeId: number } },
) => {
    if (!isAdmin()) {
        return new NextResponse("Unauthorized", { status: 403});
    }

    const data = await db.query.challenges.findFirst({
        where: eq(challenges.id, params.challengeId),
    });

    return NextResponse.json(data);
};

export const PUT = async (
    req: Request,
    { params }: { params: { challengeId: number } },
) => {
    if(!isAdmin()){
        return new NextResponse("Unauthorized", { status: 403});
    }
    const body = await req.json();
    const data = await db.update(challenges).set({
        ...body,
    }).where(eq(challenges.id, params.challengeId)).returning();

    return NextResponse.json(data[0]);
}


export const DELETE = async (
    req: Request,
    { params }: { params: { lessonId: number } },
)=> {
    if(!isAdmin()){
        return new NextResponse("Unauthorized", { status: 403 });
    }

    const data = await db.delete(lessons)
        .where(eq(lessons.id, params.lessonId)).returning();

    return NextResponse.json(data[0]);
}