import dbConnect from '@/backend/config/dbConnect';
import { allRooms, newRoom } from '@/backend/controllers/roomController';
import { createEdgeRouter } from 'next-connect';
import { NextRequest } from 'next/server';

interface RequestContext {}

const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

//define routes
router.get(allRooms);
router.post(newRoom);

//run all the routes above like get, post, put all - router.run(from next-connect)
export async function GET(request: NextRequest, ctx: RequestContext) {
  return router.run(request, ctx);
}

export async function POST(request: NextRequest, ctx: RequestContext) {
  return router.run(request, ctx);
}
