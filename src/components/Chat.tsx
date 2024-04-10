'use client';

import { generateChatResponse } from '@/utils/actions';
import { useMutation } from '@tanstack/react-query';
import { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';

export type ChatMessage = {
  role: string;
  content: string;
};

export const Chat = () => {
  const [text, setText] = useState<string>('');
  const [messages, setMessages] = useState<any[]>([]);

  const { mutate, isPending, data } = useMutation({
    mutationFn: (query: ChatMessage) => generateChatResponse([...messages, query]),
    onSuccess: (data) => {
      if (!data) {
        toast.error('Something went wrong with the chat response...')
        return;
      }
      setMessages((prev) => [...prev, data]);
    }
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = { role: 'user', content: text };
    mutate(query);
    setMessages((prev) => [...prev, query]);
    setText('');
  };

  return (
    <div className='min-h-[calc(100vh-6rem)] grid grid-rows-[1fr,auto]'>
      <div>
        <h2 className='text-5xl'>messages</h2>
      </div>
      <form onSubmit={handleSubmit} className='max-w-4xl pt-12'>
        <div className='join w-full'>
          <input
            type='text'
            placeholder='Message GeniusGPT'
            className='input input-bordered join-item w-full'
            value={text}
            required
            onChange={(e) => setText(e.target.value)}
          />
          <button className='btn btn-primary join-item' type='submit'>
            ask question
          </button>
        </div>
      </form>
    </div>
  );
};
