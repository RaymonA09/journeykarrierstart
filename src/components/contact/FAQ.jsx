import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How long does the visa process take?",
    answer: "Processing times vary by visa type: Au Pair (2-4 weeks), Blue Card (4-8 weeks), Student Visa (6-12 weeks). We provide regular updates throughout the process."
  },
  {
    question: "What's included in your service fee?",
    answer: "Our fees include complete application preparation, document review, submission, status tracking, and ongoing support until your visa is approved."
  },
  {
    question: "Do you guarantee visa approval?",
    answer: "While we cannot guarantee approval, we have a 95% success rate. We thoroughly assess your case before taking it on and only proceed if we believe you have strong chances."
  },
  {
    question: "Can you help with job placement?",
    answer: "Yes! For work visas and Blue Cards, we partner with German employers and recruitment agencies to help match qualified candidates with job opportunities."
  },
  {
    question: "What if my application is rejected?",
    answer: "In the rare case of rejection, we analyze the reasons and can help with appeals or alternative visa pathways at no additional charge for document preparation."
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = React.useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <Card className="bg-white shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-blue-600" />
          Frequently Asked Questions
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {faqs.map((faq, index) => (
          <Collapsible key={index} open={openItems.has(index)} onOpenChange={() => toggleItem(index)}>
            <CollapsibleTrigger className="flex items-center justify-between w-full p-3 text-left bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200">
              <span className="font-medium text-gray-900 text-sm">{faq.question}</span>
              <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${openItems.has(index) ? 'rotate-180' : ''}`} />
            </CollapsibleTrigger>
            <CollapsibleContent className="px-3 pb-3">
              <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </CardContent>
    </Card>
  );
}