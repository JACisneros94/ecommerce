import { signOut, useSession } from 'next-auth/react';
import Layout from '../components/Layout';
import Image from 'next/image';

export default function Home() {
  const { data: session } = useSession();
  
  return (
    <Layout>
      <div className='text-blue-900 flex justify-between'>
        <h2>
          Hola, <b>{ session?.user?.name }</b>
        </h2>
        <div className='flex items-center gap-1 bg-gray-300 text-black rounded-3xl'>
          <Image alt='' className='w-8 h-8 rounded-full' src={ session?.user?.image } />
          <span className='py-1 px-2'>
            { session?.user?.name }
          </span>
        </div>
      </div>
    </Layout>
  ) 
}
