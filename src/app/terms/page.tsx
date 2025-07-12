import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Link } from "@/components/ui/link";
import { Text } from "@/components/ui/text";
import { routes } from "@/constants/routes";

export default function TermsPage() {
  return (
    <Container borderless className="my-16">
      <div className="mb-6">
        <Heading as="h1">Terms &amp; Conditions</Heading>
      </div>
      <Text>Last updated: July 11, 2025.</Text>

      <Text>Acceptance of terms</Text>
      <Text>
        Welcome to 2689866 Alberta Inc (&ldquo;EddySims.com&ldquo;,
        &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;). By accessing
        or using our website eddysims.com (the &ldquo;Site&rdquo;) and our
        services, you agree to be bound by these Terms of Service
        (&ldquo;Terms&rdquo;). If you do not agree with any part of these Terms,
        please do not use our Site or services.
      </Text>

      <Text>1. Services</Text>
      <Text>
        We provide software consulting services to help small companies launch
        their MVP web applications, websites, shopify storefronts, and improve
        and maintain their current products. The details of our services will be
        outlined in separate agreements with our clients.
      </Text>

      <Text>2. Use of the Site</Text>
      <Text>
        You must be at least 18 years old to use our Site and services. You
        agree to use the Site only for lawful purposes and in accordance with
        these Terms. We reserve the right to modify or discontinue the Site at
        any time without notice.
      </Text>

      <Text>3. Intellectual property</Text>
      <Text>
        All content, trademarks, and intellectual property on the Site are owned
        by us or our licensors. You may not copy, reproduce, or distribute any
        content from the Site without our written permission.
      </Text>

      <Text> 4. Limitation of Liability</Text>
      <Text>
        We are not liable for any direct, indirect, incidental, or consequential
        damages resulting from your use of our Site or services. Our total
        liability for any claim related to our services is limited to the amount
        paid by you for those services.
      </Text>

      <Text>5. Third-Party Links</Text>
      <Text>
        Our Site may contain links to third-party websites. We are not
        responsible for the content or practices of any third-party sites.
      </Text>

      <Text>6. Termination</Text>
      <Text>
        We reserve the right to terminate or suspend your access to the Site at
        our sole discretion if you violate these Terms.
      </Text>

      <Text>7. Governing Law</Text>
      <Text>
        These Terms are governed by the laws of Alberta, Canada, without regard
        to its conflict of law principles.
      </Text>

      <Text>8. Changes to These Terms</Text>
      <Text>
        We may update these Terms from time to time. We will notify users of any
        material changes by updating the &quot;Last Updated&quot; date at the
        top of this page.
      </Text>

      <Text>9. Contact us</Text>
      <Text>
        If you have any questions about these Terms, please{" "}
        <Link href={routes.contact}>contact us</Link>.
      </Text>
    </Container>
  );
}
