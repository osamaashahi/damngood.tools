import { NextRequest, NextResponse } from "next/server"

import {
    GenerateScrollingScreenshotRequest,
    GenerateScrollingScreenshotRequestSchema,
} from "@/lib/schema"
import { generateScrollingScreenshots } from "@/lib/screenshots"

export async function POST(request: NextRequest) {
    try {
        const generateRequest =
            (await request.json()) as GenerateScrollingScreenshotRequest
        const result =
            await GenerateScrollingScreenshotRequestSchema.safeParseAsync(
                generateRequest
            )
        if (result.success) {
            const screenshots = await generateScrollingScreenshots(
                generateRequest.website,
                [generateRequest.device],
                generateRequest.format
            )

            return NextResponse.json({
                success: screenshots && screenshots?.length > 0,
                screenshots,
            })
        }

        return NextResponse.json({
            success: false,
            message: result.error.message,
        })
    } catch (error) {
        console.log(error)

        return NextResponse.json(
            { success: false, message: "Internal application error" },
            { status: 500 }
        )
    }
}
