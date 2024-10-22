// /lib/dynamodb.ts
import AWS from 'aws-sdk';

// Define types for your data (type safety)
export interface Item {
  id: string;
  name: string;
  description: string;
}

// Initialize the DynamoDB DocumentClient
const dynamoDb = new AWS.DynamoDB.DocumentClient({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

// Function to retrieve data from DynamoDB
export const getItems = async (): Promise<Item[]> => {
  const params = {
    TableName: process.env.DYNAMODB_TABLE_NAME!,
  };
  
  try {
    const data = await dynamoDb.scan(params).promise();
    return data.Items as Item[];
  } catch (error) {
    console.error('Error retrieving data from DynamoDB:', error);
    return [];
  }
};

// Function to store data in DynamoDB
export const putItem = async (item: Item): Promise<void> => {
  const params = {
    TableName: process.env.DYNAMODB_TABLE_NAME!,
    Item: item,
  };
  
  try {
    await dynamoDb.put(params).promise();
    console.log('Data successfully saved to DynamoDB');
  } catch (error) {
    console.error('Error saving data to DynamoDB:', error);
  }
};
