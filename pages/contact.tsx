import Button from 'components/atoms/Button'
import InputGroup from 'components/molecules/FormGroup/InputGroup'
import TextAreaGroup from 'components/molecules/FormGroup/TextAreaGroup'
import IconListItem from 'components/molecules/IconListItem'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import React from 'react'
import { FiInstagram, FiLinkedin, FiMail, FiPhoneCall, FiTwitter } from 'react-icons/fi'

const Contact = () => {
  return (
    <>
      <PageTemplate title='Contact - ICPHUB KE'>
        <section className="grid grid-cols-1 place-items-center gap-10 lg:gap-5 lg:grid-cols-2">
          <aside className="w-full sm:w-10/12 md:w-8/12 grid grid-cols-1 gap-12 sm:place-items-center lg:w-full lg:place-items-start" data-aos="fade-up-right">
            <div className="sm:text-center lg:text-left">
              <PageSentence
                title="Get in touch with us here ."
                badge="CONTACT"
              />
            </div>
            <div className="space-y-6">
              <IconListItem
                label="Twitter"
                value="@icphub_KE
                "
                icon={<FiTwitter />}
              />
               <IconListItem
                label="Instagram"
                value="icphub_ke"
                icon={<FiInstagram />}
              />
                <IconListItem
                label="Linked In"
                value="ICP Hub Kenya"
                icon={<FiLinkedin/>}
              />
              <IconListItem
                label="Email"
                value="info@kushitehub.com"
                icon={<FiMail />}
              />
            </div>
          </aside>
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full lg:flex lg:justify-end" data-aos="fade-down-left">
            <div className="grid grid-cols-1 gap-7 p-6 md:p-9 bg-light rounded-md lg:w-10/12 ">
              <div className="grid grid-cols-2 gap-4">
                <InputGroup label="Name" />
                <InputGroup label="Email" />
              </div>
              <InputGroup label="Subject" />
              <TextAreaGroup label="Message" />
              <Button value="Send Message" />
            </div>
          </aside>
        </section>
      </PageTemplate>
    </>
  )
}

export default Contact
