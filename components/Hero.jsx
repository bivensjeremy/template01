import { fontFira } from "@/config/fonts";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import clsx from "clsx";

const Hero = () => {
    return (
        <div className="min-h-screen bg-cover bg-center bg-[url('/wallpaper.png')]">
            <div className="my-auto min-h-screen text-center bg-black bg-opacity-40 flex flex-col justify-center px-6">
                <h1 className={clsx('pt-12 font-bold text-xl text-zinc-50')}>
                    Bivens Blueprint Template Website
                </h1>

                <h1 className={clsx(fontFira.className, 'text-7xl py-8 text-zinc-50')}>
                    Your Awesome Business
                </h1>
                <h1 className={clsx('pb-8 max-w-lg mx-auto text-zinc-50')}>
                    Bivens Blueprint offers several template websites to get your business up and running fast. These sites are perfect for startups and small businesses who need a quick, polished web presence. Click the link below to get started.
                </h1>

                <div>
                    <Button
                        showAnchorIcon
                        as={Link}
                        color="primary"
                        size="lg"
                        href="https://www.honeybook.com/widget/bivens_blueprint_llc_191523/cf_id/612fa0a4ceb19b0e829a228d"
                        variant="solid"
                        className="text-white"
                        >
                        Get This Design
                    </Button>
                </div>
                
            </div>
        </div>
    );
}

export default Hero;