import { Anchor } from '@/components/toolkit/Anchor'
import { CircleButtonProps } from './types'

export const CircleButton: React.FC<CircleButtonProps> = ({ label, href }) => {
  return (
    <Anchor variant="custom" href={href} data-cid="circle-button">
      <button className="cta" type="button">
        <span>{label}</span>
        <svg height="10px" viewBox="0 0 13 10" width="15px">
          <path d="M1,5 L11,5" />
          <polyline points="8 1 12 5 8 9" />
        </svg>
      </button>
    </Anchor>
  )
}
