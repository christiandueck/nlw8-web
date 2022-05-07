import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
  onFeedbackSent
}: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState('');

  const { title, image } = feedbackTypes[feedbackType];

  function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();

    console.log({
      screenshot,
      comment
    });

    onFeedbackSent();
  }

  return (
    <>
      <header>
        <button type='button'
          className='top-5 left-5 absolute text-zinc-400
      hover:text-zinc-100' title='Voltar para seleção do tipo de feedback'
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight='bold' className='w-4 h-4' />
        </button>

        <span className="text-xl leading-6 flex gap-2 items-center">
          <img src={image.source} alt={image.alt} className='w-6 h-6' />
          {title}
        </span>

        <CloseButton />
      </header>

      <form onSubmit={handleSubmitFeedback} className='my-4 w-full'>
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm
            placeholder-zinc-400 text-zinc-100 border-zinc-600
            bg-transparent rounded-md focus:border-brand focus:ring-brand focus:ring-1
            resize-none focus:outline-none scroolbar scrollbar-zinc-700 scrollbar-track-transparent
            scrollbar-thin"
          placeholder='Conte com detalhes o que está acontecendo...'
          onChange={event => setComment(event.target.value)}
          value={comment}
        />

        <footer className="flex gap-3 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />

          <button type="submit" className="p-2 bg-brand rounded-md border-transparent
          flex-1 flex justify-center items-center text-sm hover:bg-brand-hover
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900
          focus:ring-brand transition-colors disabled:opacity-50 disabled:hover:bg-brand"
            disabled={comment === '' && !screenshot}
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  );
}