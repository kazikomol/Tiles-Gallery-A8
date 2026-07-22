'use client'

import { UpdateModal } from '@/components/UpadteModal';
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';
import React from 'react';

const ProfilePage = () => {
      const userData = authClient.useSession();
      const user = userData.data?.user
      console.log(user);
    return (
        <div>
            <Card className='max-w-96 mx-auto flex flex-col items-center border mt-4'>
                <Avatar className='h-20 w-20'  >
        <Avatar.Image alt="John Doe" src={user?.image}
        referrerPolicy="no-referrer" />
        <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
      </Avatar>
      <p className='text-2xl font-semibold'>{user?.name}</p>
      <p className='text-xl '>{user?.email}</p>
            <UpdateModal/>
            </Card>
        </div>
    );
};

export default ProfilePage;