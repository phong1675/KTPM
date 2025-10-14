"use client";

import { useState } from "react";

import { challengeOptions,challenges } from "@/db/schema";

import { Header } from "./header";

type Props ={
    initialPercentage: number;
    initialHearts: number;
    initialLessonId: number;
    initialLessonChallenges: (typeof challenges.$inferSelect & {
        completed: boolean;
        challengeOptions: typeof challengeOptions.$inferSelect[];
    })[];
    userSubsription: any; // TODO: Replace with subscription DB type
};

export const Quiz = ({
    initialPercentage,
    initialHearts,
    initialLessonId,
    initialLessonChallenges,
    userSubsription,
}: Props) => {
    const [hearts, setHearts] = useState(initialHearts);
    const [percentage, setPercentage] = useState(initialPercentage);

    return (
        <>
            <Header
                hearts={hearts}
                percentage={percentage}
                hasActiveSubcription={!!userSubsription?.isActive}
            />
        </>
    );
}