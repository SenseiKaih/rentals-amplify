// /app/api/data/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getItems, putItem, Item } from '../../lib/dynamodb';

// GET: Retrieve data from DynamoDB
export async function GET() {
  const items = await getItems();
  return NextResponse.json(items, { status: 200 });
}

// POST: Store data in DynamoDB
export async function POST(req: NextRequest) {
  const body = await req.json() as Item;

  if (!body.id || !body.name || !body.description) {
    return NextResponse.json({ message: 'Invalid data' }, { status: 400 });
  }

  await putItem(body);
  return NextResponse.json({ message: 'Item successfully saved!' }, { status: 200 });
}
