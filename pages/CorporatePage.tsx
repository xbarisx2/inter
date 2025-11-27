
import React from 'react';

const PageHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
    <div className="bg-brand-blue-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
            <p className="mt-4 text-lg text-brand-blue-200">{subtitle}</p>
        </div>
    </div>
);

const Section: React.FC<{id: string, title: string, image: string, children: React.ReactNode, imageLeft?: boolean}> = ({id, title, image, children, imageLeft = false}) => (
    <section id={id} className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid md:grid-cols-2 gap-12 items-center ${imageLeft ? 'md:grid-flow-col-dense' : ''}`}>
                <div className={`${imageLeft ? 'md:col-start-2' : ''}`}>
                    <h2 className="text-3xl font-bold text-brand-blue-900 mb-4">{title}</h2>
                    <div className="space-y-4 text-gray-600">
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
    return (
        <div>
            <PageHeader title="Kurumsal Kimliğimiz" subtitle="Yenilikçi vizyonumuz ve sarsılmaz değerlerimizle tanışın." />
            
            <Section id="hakkimizda" title="Hakkımızda" image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80">
                <p>İNTER AKDENİZ ALÜMİNYUM, 20 yılı aşkın sektör tecrübesiyle alüminyum ve PVC sistemleri alanında sektörün global standartlarda hizmet veren öncü firmalarından biri olarak faaliyet göstermektedir. Kurulduğumuz günden bu yana, mimari projelerde estetik, fonksiyonellik ve dayanıklılığı bir araya getiren çözümler sunmayı ilke edindik.</p>
                <p>Uzman mühendis ve montaj kadromuzla, en son teknolojiye sahip makine parkurumuzda, alüminyum doğrama, cephe giydirme, cam balkon, pergola ve otomasyon sistemleri gibi geniş bir yelpazede üretim yapıyoruz. Her projeyi, müşterilerimizin beklentilerini aşan bir kalite anlayışıyla, zamanında ve eksiksiz teslim etme prensibiyle yönetiyoruz.</p>
            </Section>

            <div className="bg-gray-50"><div className="container mx-auto"><hr/></div></div>

            <Section id="vizyonumuz" title="Vizyonumuz" image="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=80" imageLeft>
                 <p>Sektördeki yenilikleri yakından takip ederek ve sürekli gelişimi hedefleyerek, Türkiye'de ve uluslararası pazarda alüminyum sistemleri denildiğinde akla gelen ilk markalardan biri olmaktır.</p>
                <p>Sürdürülebilir ve çevre dostu üretim tekniklerini benimseyerek, gelecek nesillere daha yaşanabilir yapılar bırakmayı hedeflerken, teknoloji ve tasarımı birleştirerek mimariye ilham veren, öncü ve yenilikçi çözümler sunmak en temel vizyonumuzdur. Müşterilerimiz ve iş ortaklarımız için sadece bir tedarikçi değil, aynı zamanda güvenilir bir çözüm ortağı olarak anılmak istiyoruz.</p>
            </Section>

            <div className="bg-gray-50"><div className="container mx-auto"><hr/></div></div>

            <Section id="misyonumuz" title="Misyonumuz" image="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80">
                <p>En yüksek kalitede hammadde ve en ileri teknolojiyi kullanarak, müşterilerimizin ihtiyaçlarına özel, estetik, güvenli ve uzun ömürlü alüminyum sistemleri üretmek ve uygulamaktır.</p>
                <p>Bu süreçte, çalışanlarımızın gelişimine yatırım yaparak, iş sağlığı ve güvenliği standartlarına tavizsiz uyarak ve tüm paydaşlarımızla şeffaf ve dürüst bir iletişim kurarak, topluma ve çevreye karşı sorumluluklarımızı eksiksiz yerine getirmeyi taahhüt ederiz. Müşteri memnuniyetini her zaman en üst seviyede tutarak, projelerine değer katmak ve kalıcı eserler bırakmak varlık sebebimizdir.</p>
            </Section>
        </div>
    );
};

export default CorporatePage;