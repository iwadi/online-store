import '../../../css/App.css';
import Section_2Contents from './Section_2Contents/Section_2Contents'

interface SidebarProps {
    onPriceChange: (min: number, max: number) => void;
}

function Section_2({ onPriceChange }: SidebarProps) {
    return (
        <>
            <section className="section_2">
                <div className="container">
                    <Section_2Contents onPriceChange={onPriceChange} />
                </div>
            </section>
        </>
    )
}

export default Section_2;