
import React from 'react';
import { useLanguage } from '../LanguageContext';

const PageHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
    <div className="bg-brand-blue-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
            <p className="mt-4 text-base md:text-lg text-brand-blue-200 max-w-2xl mx-auto">{subtitle}</p>
        </div>
    </div>
);

const Section: React.FC<{id: string, title: string, image: string, children: React.ReactNode, imageLeft?: boolean}> = ({id, title, image, children, imageLeft = false}) => (
    <section id={id} className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${imageLeft ? 'md:grid-flow-col-dense' : ''}`}>
                <div className={`${imageLeft ? 'md:col-start-2' : ''}`}>
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-blue-900 mb-4">{title}</h2>
                    <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed">
                        {children}
                    </div>
                </div>
                <div className={`${imageLeft ? 'md:col-start-1' : ''}`}>
                    <img src={image} alt={title} className="rounded-lg shadow-xl w-full h-auto object-cover aspect-[4/3]" />
                </div>
            </div>
        </div>
    </section>
);

const CorporatePage: React.FC = () => {
    const { data } = useLanguage();
    const content = data.CORPORATE_CONTENT;

    return (
        <div>
            <PageHeader title={content.header.title} subtitle={content.header.subtitle} />
            
            <Section id="hakkimizda" title={content.about.title} image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80">
                {content.about.content.map((p, i) => <p key={i}>{p}</p>)}
            </Section>

            <div className="bg-gray-50"><div className="container mx-auto"><hr/></div></div>

            <Section id="vizyonumuz" title={content.vision.title} image="https://image.pollinations.ai/prompt/futuristic%20aluminum%20skyscraper%20facade%20global%20architecture%20innovative%20glass%20design%20sustainable%20building%20photorealistic%208k" imageLeft>
                 {content.vision.content.map((p, i) => <p key={i}>{p}</p>)}
            </Section>

            <div className="bg-gray-50"><div className="container mx-auto"><hr/></div></div>

            <Section id="misyonumuz" title={content.mission.title} image="https://image.pollinations.ai/prompt/high%20tech%20aluminum%20manufacturing%20factory%20precision%20engineering%20metal%20profiles%20industrial%20machinery%20clean%20facility%20photorealistic%208k">
                {content.mission.content.map((p, i) => <p key={i}>{p}</p>)}
            </Section>
        </div>
    );
};

export default CorporatePage;
