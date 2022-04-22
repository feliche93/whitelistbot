import { useForm } from 'react-hook-form';
import { useNewMoralisObject, useMoralis } from "react-moralis";


export default function New() {

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const { save } = useNewMoralisObject("Whitelist");
  const { user } = useMoralis();

  const onSubmit = async ({name, projectLink}) => {

    console.log(user.id);

    console.log(name);
    const data = {
        'name' : name,
        'projectLink' : projectLink,
        'createdBy': user
        // projectPhoto,
    };

    // console.log(data);

    save(data, {
        onSuccess: (whitelist) => {
            // Execute any logic that should take place after the object is saved.
            alert("New object created with objectId: " + whitelist.id);
        },
        onError: (error) => {
            // Execute any logic that should take place if the save fails.
            // error is a Moralis.Error with an error code and message.
            alert(
                "Failed to create new object, with error code: " +
                    error.message
            );
        },
    });

  };


  return (
    <>
      <div className="py-5 border-b border-gray-200">
        <h3 className="text-lg leading-6 font-medium text-gray-900">New Whitelist</h3>
      </div>
      <div className="space-y-6 py-5">
        <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Whitelist</h3>
              <p className="mt-1 text-sm text-gray-500">
                Please complete the required information about your whitelist.
              </p>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form id="hook-form" className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      {...register('name', {
                        required: 'Name is required'
                      })}
                      name="name"
                      id="name"
                      autoComplete="given-name"
                      className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="col-span-3 sm:col-span-2">
                    <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                      Project Link
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        http://
                      </span>
                      <input
                        {...register('projectLink', {
                          required: 'Project link is required'
                        })}
                        type="text"
                        name="projectLink"
                        id="projectLink"
                        className="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                        placeholder="www.example.com"
                      />
                    </div>
                    <div>
                      <p className="mt-2 text-sm text-gray-500">Link to your project.</p>
                    </div>
                  </div>
                </div>
                {/* <div>
                  <label className="block text-sm font-medium text-gray-700">Project Photo</label>
                  <div className="mt-1 flex items-center space-x-5">
                    <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                      <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </span>
                    <input
                      className="form-control block px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      type="file"
                      id="formFile"
                      {...register('projectPhoto', {
                          required: 'Project Photo is required'
                        })}
                      />
                  </div>
                </div> */}
              </form>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Cancel
          </button>
          <button
            type='submit'
            form="hook-form"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Save
          </button>
        </div>
      </div>
    </>
  )
}
