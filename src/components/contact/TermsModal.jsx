import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

export default function TermsModal({ open, onClose, onAgree }) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[85vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-900">
            Terms & Conditions — Consultation Agreement
          </DialogTitle>
          <p className="text-sm text-gray-500">JourneyKarrierStart GmbH — Please read carefully before submitting</p>
        </DialogHeader>

        <ScrollArea className="flex-1 mt-4 pr-2">
          <div className="space-y-5 text-sm text-gray-700 leading-relaxed">

            <section>
              <h3 className="font-semibold text-gray-900 mb-1">1. Scope of Services</h3>
              <p>
                JourneyKarrierStart GmbH ("JKS", "we", "us") provides advisory and placement services related to German immigration, including but not limited to Au Pair placements, Ausbildung applications, FSJ/BFD programs, Blue Card applications, and general visa consultations. Submitting this form initiates a free initial consultation only and does not constitute a binding service contract.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-gray-900 mb-1">2. Data Collection & GDPR Compliance</h3>
              <p>
                By submitting your information, you consent to JKS collecting, storing, and processing your personal data solely for the purpose of providing immigration and career consultation services. All data is handled in strict accordance with the EU General Data Protection Regulation (GDPR). Your data will not be sold or shared with third parties without your explicit consent, except where required by law.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-gray-900 mb-1">3. Right to Withdraw Consent</h3>
              <p>
                You have the right to withdraw your consent at any time by contacting us at <span className="text-[#1C3E1F] font-medium">info@journeykarrierstart.de</span>. Upon withdrawal, we will delete your personal data within 30 days, unless we are legally obligated to retain it.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-gray-900 mb-1">4. No Guarantee of Outcome</h3>
              <p>
                While JKS strives for a high success rate, immigration decisions are ultimately made by the relevant German authorities. JKS does not guarantee visa approvals, placement success, or specific timelines. Our role is to provide expert guidance and maximize your chances of a successful application.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-gray-900 mb-1">5. Accuracy of Information</h3>
              <p>
                You agree to provide accurate, truthful, and complete information in all forms and communications with JKS. Providing false or misleading information may result in the termination of services and could have legal consequences under German immigration law.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-gray-900 mb-1">6. Fees & Payment</h3>
              <p>
                The initial consultation is free of charge. Any fees for subsequent services will be communicated to you clearly in writing before you are required to commit. You are under no obligation to engage paid services following the initial consultation.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-gray-900 mb-1">7. Communication Consent</h3>
              <p>
                By submitting this form, you consent to being contacted by JKS via the email address and/or phone number provided, for the purpose of following up on your inquiry. You may opt out of further communications at any time.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-gray-900 mb-1">8. Governing Law</h3>
              <p>
                These terms are governed by the laws of the Federal Republic of Germany. Any disputes arising from the use of our services shall be subject to the jurisdiction of the courts of Germany.
              </p>
            </section>

            <p className="text-xs text-gray-400 pt-2 border-t border-stone-100">
              Last updated: June 2024 — This is a placeholder document. Please replace with your official legal terms before going live.
            </p>
          </div>
        </ScrollArea>

        <div className="flex gap-3 mt-6 pt-4 border-t border-stone-100">
          <Button variant="outline" onClick={onClose} className="flex-1">
            Close
          </Button>
          <Button
            onClick={() => { onAgree(); onClose(); }}
            className="flex-1 bg-[#1C3E1F] hover:bg-[#2d5a32] text-white"
          >
            I Agree to the Terms
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}