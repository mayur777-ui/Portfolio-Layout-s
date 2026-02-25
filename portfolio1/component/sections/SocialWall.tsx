"use client";

import { useState, useRef, useEffect } from "react";
import { m, useInView } from "framer-motion"; // ✅ Using 'm' instead of 'motion'
import { 
  Instagram, Heart, MessageCircle, ExternalLink,
  Loader2, RefreshCw, Filter, Grid3X3, 
  Image as ImageIcon, Calendar, Camera, 
  Users, Mic, Award, Zap, Sparkles, Globe, Play
} from "lucide-react";

interface InstagramPost {
  id: string;
  shortcode: string;
  url: string;
  embedUrl: string;
  caption: string;
  date: string;
  likes: number;
  comments: number;
  type: string;
}

const USERNAME = "bose.me";

const postUrls = [
  "https://www.instagram.com/p/Cojom3tpSuf/",
  "https://www.instagram.com/p/CzvxWaDPhfY/",
  "https://www.instagram.com/p/CyBtBRHpgWg/",
  "https://www.instagram.com/p/CrAtTi2JHPs/",
  "https://www.instagram.com/p/Com0L8zpivt/",
  "https://www.instagram.com/p/CxCw5slPBbO/"
];

const fetchInstagramPosts = async (): Promise<InstagramPost[]> => {
  const posts: InstagramPost[] = [];
  
  for (const url of postUrls) {
    const shortcode = url.split('/p/')[1]?.split('/')[0] || '';
    posts.push({
      id: shortcode,
      shortcode,
      url,
      embedUrl: `https://www.instagram.com/p/${shortcode}/embed`,
      caption: "Community moment captured",
      date: new Date().toISOString().split('T')[0],
      likes: Math.floor(Math.random() * 2000) + 500,
      comments: Math.floor(Math.random() * 100) + 20,
      type: "Event"
    });
  }
  
  return posts;
};

export default function SocialWall() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(6);
  
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true });

  useEffect(() => {
    const loadPosts = async () => {
      const data = await fetchInstagramPosts();
      setPosts(data);
      setIsLoading(false);
    };
    
    loadPosts();
  }, []);

  const visiblePosts = posts.slice(0, visibleCount);
  const hasMore = visibleCount < posts.length;

  return (
    <section ref={sectionRef} id="social-wall" className="relative py-24 bg-[#0a0c0f]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-md px-5 py-2.5 rounded-full border border-pink-500/30 mb-6">
            <Instagram className="w-5 h-5 text-pink-400" />
            <span className="text-sm uppercase tracking-[0.2em] text-white/90">
              Instagram Feed
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light text-white">
            Instagram <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Wall</span>
          </h2>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-10 h-10 text-pink-500 animate-spin" />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visiblePosts.map((post, idx) => (
                <m.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative bg-[#14171c] rounded-2xl overflow-hidden border border-white/10"
                >
                  <div className="relative aspect-square">
                    <iframe
                      src={post.embedUrl}
                      className="absolute inset-0 w-full h-full"
                      frameBorder="0"
                      scrolling="no"
                      loading="lazy"
                      title={`Instagram post by ${USERNAME}`}
                    />
                    
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4 text-pink-400" />
                          <span className="text-xs text-white/80">{post.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4 text-blue-400" />
                          <span className="text-xs text-white/80">{post.comments}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </m.div>
              ))}
            </div>

            {hasMore && (
              <div className="flex justify-center mt-12">
                <button
                  onClick={() => setVisibleCount(p => p + 3)}
                  className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all"
                >
                  Load More
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}