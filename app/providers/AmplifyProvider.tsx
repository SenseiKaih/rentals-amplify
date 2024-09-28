// app/providers/AmplifyProvider.tsx
'use client';

import { PropsWithChildren } from 'react';
import { Amplify } from 'aws-amplify';
import config from '../../amplify_outputs.json'; 
Amplify.configure(config);

export default function AmplifyProvider({ children }: PropsWithChildren<{}>) {
  return <>{children}</>;
}
