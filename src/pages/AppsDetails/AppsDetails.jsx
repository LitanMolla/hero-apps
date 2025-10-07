import React from 'react'
import Container from '../../components/Container/Container'
import downloads from '../../assets/icon-downloads.png'
import review from '../../assets/icon-review.png'
import ratings from '../../assets/icon-ratings.png'
import { Link } from 'react-router'

const AppsDetails = () => {
  return (
    <>
      <div className="py-10 md:py-20">
        <Container>
          <div className="flex flex-col md:flex-row gap-5 items-center">
            <div className="w-70 shadow-gray-300 hover:shadow-xl duration-300 rounded-md overflow-hidden border border-gray-300">
              <img className='w-full  ' src="https://play-lh.googleusercontent.com/96_mWv5NI3VsON40Wt1l5Xjw2gjy36hzbv5oRf10Vawtf9hKZjgnWqy7_i30-HqapndX" alt="" />
            </div>
            <div className="space-y-2 flex-1 ">
              <h3 className='text-3xl font-semibold'>SmPlan:ToDo List with Reminder</h3>
              <p>Developed by <span className='text-purple-500'>productive.io</span></p>
              <hr className='border border-gray-300' />
              <div className="flex gap-10">
                <div className="text-center space-y-1">
                  <img className='w-10 mx-auto' src={downloads} alt="downloads" />
                  <p className=''>Downloads</p>
                  <h4 className='text-4xl font-bold'>9M</h4>
                </div>
                <div className="text-center space-y-1">

                  <img className='w-10 mx-auto' src={ratings} alt="ratings" />
                  <p className=''>Average Ratings</p>
                  <h4 className='text-4xl font-bold'>4.6</h4>
                </div>
                <div className="text-center space-y-1">
                  <img className='w-10 mx-auto' src={review} alt="review" />
                  <p className=''>Total Reviews</p>
                  <h4 className='text-4xl font-bold'>53K</h4>
                </div>
              </div>
              <Link className='px-6 py-3 bg-green-500 rounded-md text-gray-100 inline-block duration-300 hover:bg-green-600'>Install Now (291 MB)</Link>
            </div>
          </div>
          <hr className='border-gray-300 my-5' />
          <h4 className='text-xl font-medium'>Ratings</h4>
          <hr className='border-gray-300 my-5' />
          <h4 className='text-xl font-medium'>Description</h4>
          <p className='text-gray-900/60'>This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.

            A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you’ve worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly. The app also includes optional background sounds such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere.

            For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you’re studying for exams, coding, writing, or handling office work, the app adapts to your routine. By combining focus tracking, task management, and motivational tools, this Pomodoro app ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.</p>
        </Container>
      </div>
    </>
  )
}

export default AppsDetails