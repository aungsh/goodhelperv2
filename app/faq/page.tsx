import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookText } from "lucide-react";

export default function Faq() {
  return (
    <>
      <h1 className="text-8xl font-bold mt-38">FAQs</h1>
      <div className="flex items-center gap-2 text-lg font-bold text-gray-500">
        <BookText />
        <span>Updated July 2025</span>
      </div>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
            What services does your domestic helper agency provide?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              We assist with the recruitment, placement, and documentation of
              domestic helpers in Singapore. Our services include matching
              employers with suitable helpers, handling work permit
              applications, and providing post-placement support.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Are your domestic helpers trained and experienced?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Yes, our helpers undergo screening and training before placement.
              We ensure they have relevant experience and skills to meet the
              needs of Singaporean households.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            What is the process for hiring a domestic helper through your
            agency?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              The process includes consultation, selection of candidates,
              interviews, documentation, and work permit application. We guide
              employers through each step to ensure a smooth experience.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            How do you ensure the privacy and safety of clients and helpers?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              We adhere to strict privacy policies and comply with Singapore
              regulations. Personal data is handled securely and only used for
              necessary employment procedures.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            Is your agency licensed in Singapore?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Yes, our agency is licensed by the Ministry of Manpower (MOM) in
              Singapore. We follow all legal requirements for the recruitment
              and placement of domestic helpers.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="flex items-center gap-2 text-lg font-bold text-gray-500">
        Have more questions? Feel free to contact us.
      </div>
    </>
  );
}
