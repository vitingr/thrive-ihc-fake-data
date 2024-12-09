'use client'

import { EmptyPapertray } from '@/assets/common/EmptyPapertray'
import { Container } from '@/components/toolkit/Container'

export const MyActivity: React.FC = () => {
  return (
    <Container
      as="section"
      className="animate__animated animate__fadeIn flex flex-col gap-4 rounded-[6px] bg-white py-8 lg:gap-8 lg:px-6"
      data-cid="my-activity-profile"
    >
      <article className="flex w-full flex-col gap-4 lg:gap-6">
        <div className="flex w-full flex-col">
          <h2 className="font-medium lg:text-xl">Minha atividade</h2>
          <p className="text-sm text-slate-500">
            Veja aqui as suas últimas postagens e repulicados do seu perfil
          </p>
        </div>

        <div className="mt-4 flex w-full flex-col items-center justify-center gap-2 pb-4 lg:mt-8 lg:flex-row">
          <EmptyPapertray className="h-5 w-5" />
          <p className="text-sm text-slate-500 lg:text-base">
            Você não publicou nada até o momento...
          </p>
        </div>
      </article>
    </Container>
  )
}
