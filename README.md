# Arcium Private Contact Discovery

This project demonstrates a **Private Contact Discovery** application built using the principles of **Arcium's Confidential Computing**.

## 🛡️ The Problem
Normally, finding friends in apps requires uploading your entire address book to a central server, which is a massive privacy risk.

## 🚀 The Solution
Using **Private Set Intersection (PSI)**, this app allows users to find matches without ever revealing their non-matching contacts. 
- **Encryption:** Contacts are hashed/encrypted locally.
- **Privacy:** Only the intersection (matches) is revealed.
- **Security:** Built with the vision of Arcium's decentralized confidential network.

## 🛠️ Tech Stack
- **Frontend:** HTML5, Tailwind CSS (Arcium Palette)
- **Framework:** Vite
- **Infrastructure:** Vercel (CI/CD)
- **Privacy Logic:** Arcium-inspired PSI Mock SDK (Ready for SDK integration)

## 🎨 Design
The UI follows the official Arcium color palette:
- Primary: `#6D45FF` (Purple)
- Background: `#000000` (Black)

## 📈 Future Roadmap
- Integration with the official `@arcium/sdk` once the public registry is accessible.
- Solana wallet integration for identity verification.