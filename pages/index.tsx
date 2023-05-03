import Image from 'next/image';
import { Inter } from 'next/font/google';
import Grid from '@/components/Grid';
import Button from '@/components/Button';
import Form from '@/components/Form';
import Input from '@/components/Form/Input';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import groupValidationSchema from '@/validations/group.validation';

const inter = Inter({ subsets: ['latin'] });

const defaultValues = {
  name: '',
};

export default function Home() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues,
    resolver: yupResolver(groupValidationSchema),
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data.name);
  };

  return (
    <div className="h-screen p-6">
      <Grid classes="p-6">
        <div className="col-start-1 col-span-12">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              name="name"
              type="text"
              control={control}
              label="Nome do grupo"
              errors={errors}
            />
            <Button label="Test" variant="alt" type="submit" />
          </Form>
        </div>
      </Grid>
    </div>
  );
}
