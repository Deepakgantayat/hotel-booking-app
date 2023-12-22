import { allRooms } from "@/backend/controllers/roomController";
import { createEdgeRouter } from "next-connect";
import { NextRequest } from "next/server";

interface RequestContext{
    params:{
        id: string
    }
}
const router = createEdgeRouter<NextRequest, RequestContext>()

//define routes
router.get(allRooms)

export async function GET(request: NextRequest, ctx:RequestContext){
//run all the routes above like get, post, put all - router.run(from next-connect)
return router.run(request, ctx)
}