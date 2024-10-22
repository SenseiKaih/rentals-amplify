

import { getItem, queryItems, putItem, updateItem, deleteItem } from '../app/lib/server-utils'
import { revalidatePath } from 'next/cache'

type Equipment = {
  id: string
  name: string
  type: string
  price: number
  availability: boolean
  image: string
  description: string
}

type Land = {
  id: string
  name: string
  location: string
  price: number
  availability: boolean
  image: string
  description: string
}

// Fetch a single equipment item by its id
export async function fetchEquipmentById(id: string): Promise<Equipment | null> {
  try {
    const equipment = await getItem({
      TableName: process.env.DYNAMODB_TABLE_NAME as string,
      Key: { id }
    })
    return equipment as Equipment | null
  } catch (error) {
    console.error('Error fetching equipment by id:', error)
    throw new Error('Could not fetch equipment details.')
  }
}

// Fetch a single land item by its id
export async function fetchLandById(id: string): Promise<Land | null> {
  try {
    const land = await getItem({
      TableName: process.env.DYNAMODB_TABLE_NAME as string,
      Key: { id }
    })
    return land as Land | null
  } catch (error) {
    console.error('Error fetching land by id:', error)
    throw new Error('Could not fetch land details.')
  }
}


// Fetch all equipment for listing
export async function fetchAllEquipment(): Promise<Equipment[]> {
  try {
    const result = await queryItems({
      TableName: process.env.DYNAMODB_TABLE_NAME as string,
    })
    return result.Items as Equipment[]
  } catch (error) {
    console.error('Error fetching all equipment:', error)
    throw new Error('Could not fetch equipment list.')
  }
}

// Add a new equipment for renting
export async function addEquipment(equipment: Omit<Equipment, 'id'>): Promise<{ success: boolean }> {
  try {
    const id = Date.now().toString() // Simple ID generation
    await putItem({
      TableName: process.env.DYNAMODB_TABLE_NAME as string,
      Item: { id, ...equipment }
    })
    revalidatePath('/equipment')
    return { success: true }
  } catch (error) {
    console.error('Error adding equipment:', error)
    throw new Error('Could not add equipment.')
  }
}

// Update equipment details
export async function updateEquipment(id: string, updateData: Partial<Equipment>): Promise<{ success: boolean }> {
  try {
    const updateExpression = 'set ' + Object.keys(updateData).map(key => `#${key} = :${key}`).join(', ')
    const expressionAttributeNames = Object.keys(updateData).reduce((acc, key) => ({ ...acc, [`#${key}`]: key }), {})
    const expressionAttributeValues = Object.entries(updateData).reduce((acc, [key, value]) => ({ ...acc, [`:${key}`]: value }), {})

    await updateItem({
      TableName: process.env.DYNAMODB_TABLE_NAME as string,
      Key: { id },
      UpdateExpression: updateExpression,
      ExpressionAttributeNames: expressionAttributeNames,
      ExpressionAttributeValues: expressionAttributeValues,
    })
    revalidatePath('/equipment')
    return { success: true }
  } catch (error) {
    console.error('Error updating equipment:', error)
    throw new Error('Could not update equipment details.')
  }
}

// Delete equipment by ID
export async function deleteEquipment(id: string): Promise<{ success: boolean }> {
  try {
    await deleteItem({
      TableName: process.env.DYNAMODB_TABLE_NAME as string,
      Key: { id },
    })
    revalidatePath('/equipment')
    return { success: true }
  } catch (error) {
    console.error('Error deleting equipment:', error)
    throw new Error('Could not delete equipment.')
  }
}

// Fetch equipment by type
export async function fetchEquipmentByType(type: string): Promise<Equipment[]> {
  try {
    const result = await queryItems({
      TableName: process.env.DYNAMODB_TABLE_NAME as string,
      IndexName: 'TypeIndex', // Assuming a GSI on the 'type' attribute
      KeyConditionExpression: '#type = :type',
      ExpressionAttributeNames: { '#type': 'type' },
      ExpressionAttributeValues: { ':type': type },
    })
    return result.Items as Equipment[]
  } catch (error) {
    console.error('Error fetching equipment by type:', error)
    throw new Error('Could not fetch equipment list.')
  }
}

// Update equipment availability
export async function updateEquipmentAvailability(id: string, availability: boolean): Promise<{ success: boolean }> {
  try {
    await updateItem({
      TableName: process.env.DYNAMODB_TABLE_NAME as string,
      Key: { id },
      UpdateExpression: 'set availability = :availability',
      ExpressionAttributeValues: { ':availability': availability },
    })
    revalidatePath('/equipment')
    return { success: true }
  } catch (error) {
    console.error('Error updating equipment availability:', error)
    throw new Error('Could not update equipment availability.')
  }
}

import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  // Call to DynamoDB  to save email
  const pushSubscription = new PushSubscription(); // Create an instance of PushSubscription
  pushSubscription.save(email); // Assuming save is a method to store the email in DB

  res.status(200).json({ message: 'Subscribed successfully' });
}
