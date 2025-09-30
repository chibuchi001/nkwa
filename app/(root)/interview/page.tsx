import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";
import { getStoryblokApi } from '@/lib/storyBlok';
import { StoryblokStory } from '@storyblok/react/rsc';

const Page = async () => {
  const user = await getCurrentUser();
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
      <h3>{content?.title}</h3>

      <Agent
        userName={user?.name!}
        userId={user?.id}
        profileImage={user?.profileURL}
        type="generate"
        interviewerName={content?.agent_name}
        interviewerRole={content?.agent_role}
        callButtonText={content?.callButtonText}
        endButtonText={content?.endButtonText}
      />
    </>
  );
};

export default Page;
