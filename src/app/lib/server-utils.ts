import { DynamoDB } from 'aws-sdk'

// Initialize DynamoDB Document Client
const dynamoDB = new DynamoDB.DocumentClient({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
})

// Fetch a single item
export async function getItem(params: DynamoDB.DocumentClient.GetItemInput) {
  try {
    const result = await dynamoDB.get(params).promise()
    return result.Item
  } catch (error) {
    console.error('Error getting item:', error)
    throw error
  }
}

// Fetch multiple items (query)
export async function queryItems(params: DynamoDB.DocumentClient.QueryInput) {
  try {
    const result = await dynamoDB.query(params).promise()
    return result
  } catch (error) {
    console.error('Error querying items:', error)
    throw error
  }
}

// Add a new item
export async function putItem(params: DynamoDB.DocumentClient.PutItemInput) {
  try {
    await dynamoDB.put(params).promise()
  } catch (error) {
    console.error('Error putting item:', error)
    throw error
  }
}

// Update an existing item
export async function updateItem(params: DynamoDB.DocumentClient.UpdateItemInput) {
  try {
    await dynamoDB.update(params).promise()
  } catch (error) {
    console.error('Error updating item:', error)
    throw error
  }
}

// Delete an item
export async function deleteItem(params: DynamoDB.DocumentClient.DeleteItemInput) {
  try {
    await dynamoDB.delete(params).promise()
  } catch (error) {
    console.error('Error deleting item:', error)
    throw error
  }
}

// Scan items (for fetching all items without a specific query)
export async function scanItems(params: DynamoDB.DocumentClient.ScanInput) {
  try {
    const result = await dynamoDB.scan(params).promise()
    return result
  } catch (error) {
    console.error('Error scanning items:', error)
    throw error
  }
}