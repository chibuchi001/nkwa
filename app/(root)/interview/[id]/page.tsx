import Image from "next/image";
import { redirect } from "next/navigation";

import Agent from "@/components/Agent";
import { getRandomInterviewCover } from "@/lib/utils";

import {
  getFeedbackByInterviewId,
  getInterviewById,
} from "@/lib/actions/general.action";
import { getCurrentUser } from "@/lib/actions/auth.action";
import DisplayTechIcons from "@/components/DisplayTechIcons";
import { getStoryblokApi } from '@/lib/storyBlok';
import { StoryblokStory } from '@storyblok/react/rsc';

const InterviewDetails = async ({ params }: RouteParams) => {
  const { id } = await params;

  const user = await getCurrentUser();

  const interview = await getInterviewById(id);
  if (!interview) redirect("/");

  const feedback = await getFeedbackByInterviewId({
    interviewId: id,
    userId: user?.id!,
  });

  // Fetch content from Storyblok
    let content = null;
    try {
      const storyblokApi = getStoryblokApi();
      const { data } = await storyblokApi.get("cdn/stories/interview-gen", {
        version: "published", // Use "published" for production
      });
      content = data.story.content;
    } catch (error) {
      console.error("Error fetching Storyblok content:", error);
    }

  return (
    <>
      <div className="flex flex-row gap-4 justify-between">
        <div className="flex flex-row gap-4 items-center max-sm:flex-col">
          <div className="flex flex-row gap-4 items-center">
            <Image
              src={getRandomInterviewCover()}
              alt="cover-image"
              width={40}
              height={40}
              className="rounded-full object-cover size-[40px]"
            />
            <h3 className="capitalize">{interview.role} Interview</h3>
          </div>

          <DisplayTechIcons techStack={interview.techstack} />
        </div>

        <p className="bg-dark-200 px-4 py-2 rounded-lg h-fit">
          {interview.type}
        </p>
      </div>

      <Agent
        userName={user?.name!}
        userId={user?.id}
        interviewId={id}
        type="interview"
        questions={interview.questions}
        feedbackId={feedback?.id}
        interviewerName={content?.agent_name}
        interviewerRole={content?.agent_role}
        callButtonText={content?.callButtonText}
        endButtonText={content?.endButtonText}
      />
    </>
  );
};

export default InterviewDetails;
