import Image from 'next/image';
import { Inter } from 'next/font/google';
import Grid from '@/components/Grid';
import Button from '@/components/Button';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="h-screen p-6">
      <Grid classes="p-6">
        <div className="col-start-1 col-span-12">
          <Button label="Test" variant="alt" />
        </div>
      </Grid>
    </div>
  );
}
