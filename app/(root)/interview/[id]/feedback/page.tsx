import { Button } from '@/components/ui/button';
import { getCurrentUser } from '@/lib/actions/auth.action';
import { getFeedbackByInterviewId, getInterviewById } from '@/lib/actions/general.action';
import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'

const Feedback = async ({params}:RouteParams) => {
  const {id}= await params;
  const user=await getCurrentUser();

  const interview=await getInterviewById(id);
  if(!interview) redirect('/');
  const feedback=await getFeedbackByInterviewId({
    interviewId:id,
    userId:user?.id!,
  });

  if (!feedback) {
    return (
      <section className='selection-feedback'>
        <p>No feedback available for this interview.</p>
      </section>
    );
  }

  return (
    <section className='selection-feedback'>
      <div className='flex flex-row justify-center'>
        <div className='flex flex-row gap-5'>
          <div className='flex flex-row gap-2'>
            <Image
              src='/star.svg'
              width={22}
              height={22}
              alt="star"
            />
            <p>
              Overall Impressions:{" "}
              <span className='text-primary-200 font-bold'>
                {feedback?.totalScore}
              </span>
              /100
            </p>
          </div>
          <div className='flex flex-row gap-2'>
            <Image 
              src='/calendar.svg'
              width={22}
              height={22}
              alt="calendar"
            />
            <p>
              {feedback?.createdAt
                ? dayjs(feedback.createdAt).format
              ('MMM D, YYYY h:mm A') : "N/A"}
            </p>
          </div>
        </div>
      </div>
      <hr />
      <p>{feedback?.finalAssessment}</p>
      <div className='flex flex-col gap-4'>
        <h2>Breakdown of the Interview:</h2>
        {feedback?.categoryScores?.map((category,index)=>(
          <div key={index}>
            <p className='font-bold'>
              {index+1}.{category.name}
              ({category.score}/100)
            </p>
            <p>{category.comment}</p>
          </div>
        ))}
      </div>
      <div className='flex flex-col gap-3'>
        <h3>Strengths</h3>
        <ul>
          {feedback?.strengths?.map((strength, index)=>(
            <li key={index}>{strength}</li>
          ))}
        </ul>
      </div>
      <div className='flex flex-col gap-3'>
        <h3>Areas For Improvement</h3>
        <ul>
          {feedback?.areasForImprovement?.map((area, index)=>(
            <li key={index}>{area}</li>
          ))}
        </ul>
      </div>
      <div className='buttons'>
      <Button className="btn-secondary flex-1">
          <Link href="/" className="flex w-full justify-center">
            <p className="text-sm font-semibold text-primary-200 text-center">
              Back to dashboard
            </p>
          </Link>
        </Button>

        <Button className="btn-primary flex-1">
          <Link
            href={`/interview/${id}`}
            className="flex w-full justify-center"
          >
            <p className="text-sm font-semibold text-black text-center">
              Retake Interview
            </p>
          </Link>
        </Button>
      </div>

    </section>
  )
}

export default Feedback