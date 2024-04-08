import { PencilLine, PictureInPicture, Tent } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { cn } from "@/lib/utils"
import { FeatureHeader } from '@/components/feature/feature-header'
import { FeatureDescription } from '@/components/feature/feature-description'
import { FeatureBadge } from '@/components/feature/feature-badge'
import { FeatureListContainer } from '@/components/feature/feature-list-container'
import { FeatureListItem } from '@/components/feature/feature-list-item'
import { FeatureContainer } from '@/components/feature/feature-container'
import { FeatureContent } from '@/components/feature/feature-content'
import { FeatureImage } from '@/components/feature/feature-image'

interface AIFeatureProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function AIFeature({
  className,
  ...props
}: AIFeatureProps) {
  return (
    <section className={cn("py-16 md:py-10", className)} {...props}>
      <div className="container">
        <FeatureContainer>
          <FeatureContent>
            <FeatureBadge>72 Hours Saved</FeatureBadge>
            <FeatureHeader>OpenAI Integration</FeatureHeader>
            <FeatureDescription>Want to build a chatbot or a language model? ShipMyApp uses OpenAI to help you build AI-powered applications.</FeatureDescription>
            <FeatureListContainer>
              <FeatureListItem icon={<Tent className="h-6 w-6 text-primary" />}>
                Build AI Apps
              </FeatureListItem>
              <FeatureListItem icon={<PencilLine className="h-6 w-6 text-primary" />}>
                Streaming Response supported
              </FeatureListItem>
              <FeatureListItem icon={<PictureInPicture className="h-6 w-6 text-primary" />}>
                Replicate Integration
              </FeatureListItem>
            </FeatureListContainer>
          </FeatureContent>
          <div className="lg:order-2">
            <Image
              src="/features/llm.gif"
              alt="ShipMyApp Banner"
              className="w-full h-full p-2 rounded-lg"
              width={1080}
              height={900}
              priority
              unoptimized
            />
          </div>
        </FeatureContainer>
      </div>
    </section>
  )
}
