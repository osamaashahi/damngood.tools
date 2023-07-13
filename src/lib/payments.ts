import { db } from "./db"

export async function handleOrder(order: any) {
    if (order.attributes.status != "paid") {
        return
    }

    await db.user.update({
        data: {
            premium: true,
        },
        where: {
            email: order.attributes.user_email,
        },
    })
}
