import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Link } from "@/components/ui/link";
import { Text } from "@/components/ui/text";
import { routes } from "@/constants/routes";

export default function PrivacyPage() {
  return (
    <Container borderless className="my-16">
      <div className="mb-6">
        <Heading as="h1">Privacy Policy</Heading>
      </div>
      <Text>Last Updated: July 11, 2025</Text>
      <Text>
        2689866 Alberta Inc, (&ldquo;EddySims.com&ldquo;, &ldquo;Company,&rdquo;
        &ldquo;we,&rdquo; &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed
        to protecting your privacy. This Privacy Policy explains how we collect,
        use, disclose, and safeguard your information when you visit our website
        eddysims.com (the &ldquo;Site&rdquo;). By using our Site, you agree to
        the collection and use of information in accordance with this policy.
      </Text>

      <Text>1. Information we collect</Text>
      <Text>
        We may collect personal information, such as your name, email address,
        and other details you provide when contacting us or using our services.
        Additionally, we may collect non-personal information such as IP
        addresses, browser types, and usage data through cookies and analytics
        tools.
      </Text>

      <Text>2. How we use your information</Text>
      <Text>
        We use the information we collect to provide and improve our services,
        communicate with you, process transactions, and enhance user experience.
        We may also use your information to send promotional content, which you
        can opt out of at any time.
      </Text>

      <Text>3. Sharing your information</Text>
      <Text>
        We do not sell or rent your personal information. However, we may share
        your information with service providers, business partners, or legal
        authorities when required by law.
      </Text>

      <Text>4. Cookies and tracking technologies</Text>
      <Text>
        We use cookies and similar technologies to track activity on our Site
        and store certain information. You can modify your browser settings to
        refuse cookies, though this may affect your experience on our Site.
      </Text>

      <Text>5. Data security</Text>
      <Text>
        We implement reasonable security measures to protect your information.
        However, no method of transmission over the internet is 100% secure, and
        we cannot guarantee absolute security.
      </Text>

      <Text>6. Your rights and choices</Text>
      <Text>
        You have the right to access, update, or delete your personal
        information. If you wish to make such a request, please contact us using
        the details below.
      </Text>

      <Text>7. Third-party links</Text>
      <Text>
        Our Site may contain links to third-party websites. We are not
        responsible for their privacy practices and encourage you to review
        their policies before providing any personal information.
      </Text>

      <Text>8. Changes to this privacy policy</Text>
      <Text>
        We may update this privacy policy from time to time. We will notify
        users of significant changes by updating the &ldquo;Last Updated&rdquo;
        date at the top of this page.
      </Text>

      <Text>9. Contact Us</Text>
      <Text>
        If you have any questions about this privacy policy, please{" "}
        <Link href={routes.contact}>contact us</Link>.
      </Text>
    </Container>
  );
}
